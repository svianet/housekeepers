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

export const US_STATES = [
    { code: "AL", name: "Alabama"},
    { code: "AK", name: "Alaska"},
    { code: "AZ", name: "Arizona"},
    { code: "AR", name: "Arkansas"},
    { code: "CA", name: "California"},
    { code: "CO", name: "Colorado"},
    { code: "CT", name: "Connecticut"},
    { code: "DE", name: "Delaware"},
    { code: "FL", name: "Florida"},
    { code: "GA", name: "Georgia"},
    { code: "HI", name: "Hawaii"},
    { code: "ID", name: "Idaho"},
    { code: "IL", name: "Illinois"},
    { code: "IN", name: "Indiana"},
    { code: "IA", name: "Iowa"},
    { code: "KS", name: "Kansas"},
    { code: "KY", name: "Kentucky"},
    { code: "LA", name: "Louisiana"},
    { code: "ME", name: "Maine"},
    { code: "MD", name: "Maryland"},
    { code: "MA", name: "Massachusetts"},
    { code: "MI", name: "Michigan"},
    { code: "MN", name: "Minnesota"},
    { code: "MS", name: "Mississippi"},
    { code: "MO", name: "Missouri"},
    { code: "MT", name: "Montana"},
    { code: "NE", name: "Nebraska"},
    { code: "NV", name: "Nevada"},
    { code: "NH", name: "New Hampshire"},
    { code: "NJ", name: "New Jersey"},
    { code: "NM", name: "New Mexico"},
    { code: "NY", name: "New York"},
    { code: "NC", name: "North Carolina"},
    { code: "ND", name: "North Dakota"},
    { code: "OH", name: "Ohio"},
    { code: "OK", name: "Oklahoma"},
    { code: "OR", name: "Oregon"},
    { code: "PA", name: "Pennsylvania"},
    { code: "RI", name: "Rhode Island"},
    { code: "SC", name: "South Carolina"},
    { code: "SD", name: "South Dakota"},
    { code: "TN", name: "Tennessee"},
    { code: "TX", name: "Texas"},
    { code: "UT", name: "Utah"},
    { code: "VT", name: "Vermont"},
    { code: "VA", name: "Virginia"},
    { code: "WA", name: "Washington"},
    { code: "WV", name: "West Virginia"},
    { code: "WI", name: "Wisconsin"},
    { code: "WY", name: "Wyoming"},
];

export const AVAILABILITY = [
    { key: "T", name: "Today" },
    { key: "W", name: "Next 7 days" },
    { key: "M", name: "Next 30 days" },
];

export const HOUSEKEEPER_SORTBY = [
    { key: "R", name: "Relevance" },
    { key: "E", name: "Experience" },
    { key: "Y", name: "Age (youngest)" },
    { key: "O", name: "Age (oldest)" },
];

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