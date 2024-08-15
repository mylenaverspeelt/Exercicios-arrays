const { execSync } = require('child_process');
const exerciseName = process.argv[2];

if (!exerciseName) {
    console.error('Por favor, forneça o nome do exercício.');
    process.exit(1);
}

const filePath = `src/implementacao/${exerciseName}`;

try {
    execSync(`ts-node ${filePath}`, { stdio: 'inherit' });
} catch (error) {
    console.error('Erro ao executar o exercício:', error.message);
    process.exit(1);
}
