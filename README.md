# JSON Schema Builder

A professional, interactive JSON Schema Builder built with React, TypeScript, and Tailwind CSS. Create complex JSON schemas with nested structures through an intuitive drag-and-drop interface.


## ✨ Features

- **🎯 Intuitive Interface**: Clean, user-friendly form builder with real-time JSON preview
- **🔄 Deep Nesting**: Support for unlimited levels of nested objects
- **🎨 Visual Hierarchy**: Clear indentation and connecting lines for nested structures
- **⚡ Real-time Preview**: Live JSON output updates as you build your schema


## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/AbhimanyuAhuja12/HRone-Frontend
   ```

2. **Install dependencies**
   ```
   npm install
   ```
  

3. **Run the development server**
   ```
   npm run dev
   ```
  

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎮 Usage

### Basic Usage

1. **Add Fields**: Click the "+ Add Item" button to create new fields
2. **Configure Fields**: 
   - Enter field name in the text input
   - Select field type from dropdown (String, Number, Boolean, Nested)
   - Toggle the switch to mark fields as required
3. **Create Nested Structures**: Select "Nested" type to create child fields
4. **Real-time Preview**: Watch your JSON schema update in real-time on the right panel

### Field Types

| Type | Description | JSON Output |
|------|-------------|-------------|
| **String** | Text field | \`"STRING"\` |
| **Number** | Numeric field | \`"number"\` |
| **Boolean** | True/false field | \`"boolean"\` |
| **Nested** | Object with child fields | \`{...}\` |

### Example Schema

```
{
  "name": "STRING",
  "age": "number",
  "isActive": "boolean",
  "address": {
    "street": "STRING",
    "city": "STRING",
    "coordinates": {
      "lat": "number",
      "lng": "number"
    }
  }
}
```

## 🏗️ Project Structure

```
json-schema-builder/
├── src/
│   ├── components/
│   │   ├── JsonSchemaBuilder.tsx    # Main container component
│   │   └── FieldRow.tsx            # Individual field component
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── utils/
│   │   └── index.ts                # Utility functions
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/ui/                  # ShadCN UI components
│   ├── input.tsx
│   ├── button.tsx
│   ├── switch.tsx
│   └── select.tsx
├── lib/
│   └── utils.ts                    # Utility functions
└── README.md
```

## 🛠️ Built With

- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[ShadCN/UI](https://ui.shadcn.com/)** - UI components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icons



