import json
from pathlib import Path
from nutrition_ai.app.utils.docx_importer import DocxImporter


class IngestionPipeline:

    @staticmethod
    def ingest_folder(folder_path: str, output_json: str):
        folder = Path(folder_path)

        print("\n=== INGESTION DEBUG START ===")
        print("Input folder resolved to:", folder.absolute())

        if not folder.exists():
            print("ERROR: Folder does not exist!")
            return

        files = list(folder.iterdir())

        print("Files detected in folder:")
        for f in files:
            print(" -", f.name)

        records = []

        for file in files:
            print(f"\nChecking file: {file.name} (suffix={file.suffix})")

            if file.suffix.lower() != ".docx":
                print(" → Skipping (not DOCX)")
                continue

            print(f" → Attempting to parse {file.name}")

            try:
                plan = DocxImporter.import_docx_to_diet(str(file))

                print(" → Parsed object:", plan)
                print(" → Parsed type:", type(plan))

                # If importer returned None or empty
                if plan is None:
                    print(" !!! ERROR: Importer returned None !!")
                    continue

                # Make sure it's a DietPlan or dict-like
                if hasattr(plan, "dict"):
                    records.append(plan.dict())
                else:
                    print(" → Importer did NOT return a Pydantic model, saving raw plan")
                    records.append(plan)

                print(" → Successfully added to records")

            except Exception as e:
                print(f" !!! ERROR parsing {file.name}: {e}")

        print("\nTotal ingested templates:", len(records))

        # Write JSON
        Path(output_json).write_text(
            json.dumps(records, indent=2, ensure_ascii=False),
            encoding="utf-8"
        )

        print(f"Saved JSON to: {output_json}")
        print("=== INGESTION DEBUG END ===\n")

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 3:
        print("Usage: python -m nutrition_ai.app.utils.ingestion_pipeline <input_folder> <output_json>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_file = sys.argv[2]

    IngestionPipeline.ingest_folder(input_folder, output_file)