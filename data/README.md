# Website Content Management

This folder contains all the content for your website in JSON format. You can now update your website content by simply editing these files without touching the HTML, CSS, or JavaScript code.

## Files Structure

- `content.js` - Main content file containing all website text in both English and Turkish (JavaScript format)
- `content.json` - Backup content file (for reference only)

## How to Update Your Website

### 1. Personal Information
Edit the `personal` section in `content.js`:

```json
"personal": {
  "name": "Kagan Han Catan",
  "title": "Data Scientist & Python Developer",
  "email": "kagan.catan@gmail.com",
  "linkedin": "https://www.linkedin.com/in/kaganhancatan/",
  "github": "https://github.com/KaganHanCatan",
  "resume": "Assets/Resume.pdf",
  "profileImage": "Assets/Icons/logo1.png"
}
```

### 2. Hero Section
Update the `hero` section for both languages:

```json
"hero": {
  "en": {
    "greeting": "Hi, I'm",
    "subtitle": "Data Scientist & Python Developer",
    "description": "Your description here...",
    "portfolioButton": "My Portfolio",
    "resumeButton": "Resume"
  },
  "tr": {
    "greeting": "Merhaba, Ben",
    "subtitle": "Veri Bilimci ve Python Geliştirici",
    "description": "Turkish description here...",
    "portfolioButton": "Portföyüm",
    "resumeButton": "Özgeçmiş"
  }
}
```

### 3. About Section
Edit your about information and statistics:

```json
"about": {
  "en": {
    "title": "About Me",
    "subtitle": "Getting to know me",
    "description1": "First paragraph about yourself...",
    "description2": "Second paragraph about yourself...",
    "statYears": "2+",
    "statYearsLabel": "Years Experience",
    "statProjects": "5+",
    "statProjectsLabel": "Projects Completed",
    "statCompanies": "1+",
    "statCompaniesLabel": "Companies Worked"
  }
}
```

### 4. Skills
Update your skills list:

```json
"skills": [
  "Python",
  "SQL",
  "Machine Learning",
  "Statistical Analysis",
  "Data Visualization",
  "Docker",
  "Git",
  "MLOps",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Streamlit"
]
```

### 5. Experience
Add, remove, or edit your work experience:

```json
"experience": {
  "en": {
    "title": "Experience",
    "subtitle": "My professional journey",
    "items": [
      {
        "period": "2022 - Present",
        "title": "Jr. Data Scientist",
        "company": "Peopleoma",
        "description": "Your job description here..."
      }
    ]
  }
}
```

### 6. Projects
Update your projects:

```json
"projects": {
  "en": {
    "title": "Featured Projects",
    "subtitle": "Some of my recent work",
    "items": [
      {
        "title": "Project Name",
        "description": "Project description...",
        "tags": ["Python", "Machine Learning", "Forecasting"],
        "link": "https://github.com/username/repo"
      }
    ]
  }
}
```

## Important Notes

1. **Always keep the same structure** - Don't change the key names (like "personal", "hero", etc.)
2. **Maintain both languages** - Update both English ("en") and Turkish ("tr") sections
3. **Save as valid JSON** - Make sure your JSON syntax is correct (use JSON validators if needed)
4. **Test after changes** - Always test your website after making changes
5. **Backup before editing** - Keep a backup of your content.json before making major changes

## Quick Tips

- Use a JSON validator online to check your syntax before saving
- Keep descriptions concise but informative
- Update project links to point to your actual GitHub repositories
- Make sure image paths in "personal" section are correct
- Statistics in the about section should be numbers followed by "+" (like "2+", "5+")

## After Making Changes

1. Save the `content.js` file
2. Refresh your website
3. Check both English and Turkish versions
4. Test all links and functionality

Your website will automatically load the updated content from this file!

## Important Notes About the JavaScript Format

- The content is now in a JavaScript file (`content.js`) instead of JSON for better compatibility
- Edit the JavaScript object just like you would edit JSON, but remember it's JavaScript syntax
- The content is defined as `const websiteContent = { ... };`
- Make sure to preserve the JavaScript syntax when editing 