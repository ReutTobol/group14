# AppleSpot Website

A modern e-commerce platform for Apple products built with Flask and MongoDB.

## Prerequisites

- Python 3.8 or higher
- MongoDB (running locally on port 27017)
- pip (Python package installer)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd group14
```

2. Install required packages:
```bash
pip install -r requirements.txt
```


## Database Initialization

Database initialization runs automatically on app run.
If the database is not working or you need to reset it, follow these steps:

1. Run the database initialization script:
```bash
python init_db.py
```

This will:
- Create the 'applespot' database
- Initialize required collections (products, users, orders, contact)
- Populate the products collection with sample data
- Set up necessary indexes

## Running the Website

1. Start the Flask application:
```bash
cd part3
python app.py
```

2. Access the website:
- Open your web browser
- Go to `http://localhost:5000`
- The website should now be running locally

## Analyzing the Database

To view database statistics and collection information:

1. Run the analysis script:
```bash
python analyze_db.py
```

This will show:
- List of all collections
- Document counts for each collection
- Sample document structures
- Collection-specific statistics:
  - Products: Count by category
  - Users: Total registered users
  - Orders: Total orders and revenue
  - Contact: Message counts and status distribution

## Project Structure

```
group14/
├── app.py              # Main Flask application
├── init_db.py         # Database initialization script
├── analyze_db.py      # Database analysis tool
├── requirements.txt   # Python dependencies
├── blueprints/       # Route handlers
│   ├── auth.py       # Authentication routes
│   ├── products.py   # Product routes
│   ├── orders.py     # Order routes
│   └── contact.py    # Contact form routes
├── static/           # Static files (CSS, JS, images)
└── templates/        # HTML templates
```
