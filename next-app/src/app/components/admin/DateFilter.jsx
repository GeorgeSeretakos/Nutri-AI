"use client";
import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { el as elGR, enGB } from "date-fns/locale";
import { startOfDay, endOfDay } from "date-fns";
import { useLocale } from "@lib/locale";

export default function DateFilter({ setDateFilter }) {
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  const locale = useLocale(); // "el" or "en"
  const pickerLocale = locale === "en" ? enGB : elGR;

  React.useEffect(() => {
    setDateFilter((prev) => ({
      ...prev,
      from: from ? startOfDay(from).toISOString() : undefined,
      to: to ? endOfDay(to).toISOString() : undefined,
    }));
  }, [from, to, setDateFilter]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={pickerLocale}>
      <div className="flex flex-col sm:flex-row gap-4 bg-white rounded w-full max-w-lg mx-auto">
        <DatePicker
          label={locale === "en" ? "From" : "Από"}
          value={from}
          onChange={setFrom}
          slotProps={{ textField: { size: "small", fullWidth: true } }}
        />
        <DatePicker
          label={locale === "en" ? "To" : "Έως"}
          value={to}
          onChange={setTo}
          slotProps={{ textField: { size: "small", fullWidth: true } }}
        />
      </div>
    </LocalizationProvider>
  );
}
