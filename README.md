# 🧾 Bill Generator

A responsive, easy-to-use web application for generating professional bills, invoices, and receipts. Designed for freelancers, small businesses, and service providers who need quick billing with customizable templates and global currency support.

![Bill Generator Screenshot](/public/og-image.svg)

## 🌟 Features

- ✅ **Form-Based Invoice Creation**: Quickly generate invoices by filling out a simple, intuitive form.
- 💱 **Multi-Currency & Auto-Conversion**: Support for global currencies including USD (Default), EUR, GBP, and **Somali Shilling (SOS)** with automatic amount conversion.
- 👤 **Client & Business Management**: Easily manage business details, "Bill To", and "Ship To" information.
- 🛒 **Itemized Billing**: Add multiple products or services with individual rates and descriptions.
- 📈 **Smart Calculations**: Automatic calculation of Sub-totals, Tax (GST/VAT), and Grand Totals.
- 🧾 **Template Gallery**: 9+ professional invoice templates and 4 specialized thermal receipt layouts.
- 💾 **Export & Print**: Save data locally via LocalStorage, print directly from the browser, or download as a high-quality PDF.
- 📱 **Fully Responsive**: Works seamlessly on desktops, tablets, and smartphones.

## 🔧 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **UI Library**: Shadcn UI & Lucide Icons
- **PDF Engine**: jsPDF & html2canvas
- **Calculations**: Custom utility functions for financial accuracy.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BillGenerator/billify.git
cd billify-generator-8701-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

> The app will be live at `http://localhost:8080`.

✨ **How to Use**

1. **Select Currency**: Choose your preferred currency from the dropdown (amounts convert automatically).
2. **Business Info**: Enter your company details and customer information.
3. **Add Items**: Input products/services, quantities, and prices.
4. **Dates**: Set the invoice date and payment due date.
5. **Tax**: Enter the applicable tax rate percentage.
6. **Design**: Select a template from the Gallery or switch to the **Receipt Generator** for thermal prints.
7. **Finalize**: Preview, Print, or Download your document as a PDF.

📂 **Folder Structure**

```text
src/
├── components/      # UI components and Invoice/Receipt templates
├── pages/           # Index, Receipt, and Template pages
├── lib/             # Utility styling helpers
├── utils/           # Currency formatting, PDF generation, and math logic
└── App.jsx          # Main routing and layout
```

📄 License

This project is licensed under the MIT License. Feel free to use and customize it.


---

📬 **Contact**

**Developer:** SG  
**Email:** ********@gmail.com
