# Architecture

The library is split into two layers:

1. General interaction components.
2. Persian/Iranian domain components and utilities.

Domain features are explicit components instead of hidden behavior inside generic primitives.

## Domain layer

- digit normalization
- Persian number formatting
- Toman/Rial helpers
- Iranian mobile normalization and validation
- Iranian national ID validation
- Jalali/Gregorian helpers

## Components

- PersianNumberInput
- CurrencyInput
- IranPhoneInput
- NationalIdInput
- JalaliDatePicker