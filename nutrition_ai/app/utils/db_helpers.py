# nutrition_ai/db/prisma_mock.py

"""
Fake Prisma-like DB layer
=========================

Full mock layer following Prisma pattern:
- prisma.user.find_unique
- prisma.diet.find_unique
- prisma.weekly.find_unique
- prisma.user.upsert
- prisma.diet.upsert
- prisma.weekly.upsert

You can replace each function with real Prisma Client calls later.
"""

from typing import Optional, Dict, Any
import json

from nutrition_ai.models.user_profile import UserProfile
from nutrition_ai.models.diet_plan import DietPlan
from nutrition_ai.models.weekly_plan import WeeklyPlan

# TEMP IN-MEMORY DATABASE
DB: Dict[str, Dict[str, Any]] = {}


# ------------------------------------------------------------
# INTERNAL HELPERS
# ------------------------------------------------------------
def _ensure_user_record(user_id: str):
    if user_id not in DB:
        DB[user_id] = {
            "profile": None,
            "baseline_diet": None,
            "weekly_plan": None,
        }


# ------------------------------------------------------------
# USER PROFILE OPERATIONS
# ------------------------------------------------------------
def get_user_profile(user_id: str) -> Optional[UserProfile]:
    rec = DB.get(user_id)
    if not rec or rec.get("profile") is None:
        return None
    return UserProfile(**rec["profile"])


def save_user_profile(user_id: str, profile: UserProfile):
    _ensure_user_record(user_id)
    DB[user_id]["profile"] = json.loads(profile.model_dump_json())


# ------------------------------------------------------------
# DIET PLAN OPERATIONS
# ------------------------------------------------------------
def get_diet(user_id: str) -> Optional[DietPlan]:
    rec = DB.get(user_id)
    if not rec or rec.get("baseline_diet") is None:
        return None
    return DietPlan(**rec["baseline_diet"])


def save_diet(user_id: str, diet: DietPlan):
    _ensure_user_record(user_id)
    DB[user_id]["baseline_diet"] = json.loads(diet.model_dump_json())


# ------------------------------------------------------------
# WEEKLY PLAN OPERATIONS
# ------------------------------------------------------------
def get_weekly(user_id: str) -> Optional[WeeklyPlan]:
    rec = DB.get(user_id)
    if not rec or rec.get("weekly_plan") is None:
        return None
    return WeeklyPlan(**rec["weekly_plan"])


def save_weekly(user_id: str, weekly: WeeklyPlan):
    _ensure_user_record(user_id)
    DB[user_id]["weekly_plan"] = json.loads(weekly.model_dump_json())


# ------------------------------------------------------------
# SAVE ALL STATE (used by chat agent)
# ------------------------------------------------------------
def save_full_state(
    user_id: str,
    profile: UserProfile,
    baseline_diet: Optional[DietPlan],
    weekly_plan: Optional[WeeklyPlan]
):
    save_user_profile(user_id, profile)
    if baseline_diet:
        save_diet(user_id, baseline_diet)
    if weekly_plan:
        save_weekly(user_id, weekly_plan)
