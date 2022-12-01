export const ACCOUNT = {
    PENDING: "P",
    VALIDATED: "V",
    BLOCKED: "B",
    REMOVED: "X"
}

export const ROLE = {
    ADMINISTRATOR: 1,
    HOUSEKEEPER: 2,
    CUSTOMER: 3
}

export const JOB = {
    TYPE: {
        RECURRING: "R",
        ONETIME: "O"
    },
    FREQUENCY: {
        WEEK: "W",
        EVERY_OTHER_WEEK: "Q",
        EVERY_MONTH: "M",
        ONETIME: "1"
    },
    DAYS: {
        SUNDAY: "S",
        MONDAY: "M",
        TUESDAY: "T",
        WEDNESDAY: "W",
        THURSDAY: "H",
        FRIDAY: "F",
        SATURDAY: "A"
    },
    STATUS: {
        OPENED: "O",
        CANCELLED: "C",
        EXPIRED: "E",
        ACCEPTED: "A",
        DONE: "D"
    }
}

export const SERVICE_COMPLETION = {
    STATUS: {
        OPENED: "O",
        STARTED: "S",
        CANCELLED: "C",
        DONE: "D"
    }
}

export const APPLICATION = {
    STATUS: {
        REQUESTED: "R",
        VIEWED: "V",
        ACCEPTED: "A",
        REJECTED: "X"
    }
}

export const LANGUAGES = [
    {
        "lang_id": 1,
        "language_name": "English (United States)",
        "language_code": "en-us"
    },
    {
        "lang_id": 2,
        "language_name": "Portuguese (Brazil)",
        "language_code": "pt-br"
    },
    {
        "lang_id": 3,
        "language_name": "Spanish",
        "language_code": "es"
    }
  ];