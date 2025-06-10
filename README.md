# High School Path Finder

An interactive web application that helps high school students discover suitable clubs, create a 4-year roadmap, and plan their academic journey. The app provides personalized recommendations based on students' interests, goals, and college aspirations.

## Features

- Interactive quiz system with multiple-choice questions
- Personalized club recommendations using AI
- Detailed 4-year academic roadmap
- Summer program suggestions
- College preparation guidance
- Downloadable PDF reports
- Mobile-responsive design

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd highschoolquiz
```

2. Set up the configuration:
   - Copy `config.sample.js` to `config.js`
   - Get an API key from [OpenRouter](https://openrouter.ai/)
   - Replace the placeholder in `config.js` with your API key

3. Serve the application:
   - Use a local server (e.g., Python's built-in server or Live Server in VS Code)
   - Open `index.html` in your browser

## Files to Upload to GitHub

Upload these files:
```
├── index.html
├── styles.css
├── script.js
├── config.sample.js
├── .gitignore
└── README.md
```

Do NOT upload:
- `config.js` (contains your private API key)
- `.vscode/` directory
- Any other IDE-specific files
- `node_modules/` (if you add npm packages later)

## GitHub Upload Instructions

1. Create a new repository on GitHub

2. Initialize Git in your local directory (if not already done):
```bash
git init
```

3. Add and commit the files:
```bash
git add index.html styles.css script.js config.sample.js .gitignore README.md
git commit -m "Initial commit"
```

4. Link to your GitHub repository:
```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

## Security Notes

- Never commit `config.js` with your actual API key
- Always check that `config.js` is in your `.gitignore`
- Use `config.sample.js` as a template for other developers

## Development

To modify or enhance the application:
1. Make sure you have a working `config.js` with valid API key
2. Test all changes locally before committing
3. Keep the API key secure and never share it publicly

## Dependencies

- jsPDF (for PDF generation)
- html2canvas (for PDF generation)
- OpenRouter API (for AI-powered recommendations)
- Google Fonts (Poppins)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - Feel free to use and modify for your needs.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 