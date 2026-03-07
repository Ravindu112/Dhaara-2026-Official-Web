const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Replace import with const assigned string
            // e.g. import logo from '../assets/logo_gold.svg'; -> const logo = '/assets/logo_gold.svg';
            const regex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"](?:\.\.\/)+assets\/([^'"]+)['"];?/g;
            const newContent = content.replace(regex, "const $1 = '/assets/$2';");

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'components'));
replaceInDir(path.join(__dirname, 'app'));
