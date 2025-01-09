module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
        '/node_modules/',
         '/dist/',
          '/app/main*.ts',
           '/app/app*.ts', 
        '/app/common',
    '/app/database', '/app/models', '/app/routes'],
}