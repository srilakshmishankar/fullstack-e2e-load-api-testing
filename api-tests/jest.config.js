module.exports = {
    'reporters': [
        'default',
        ['jest-html-reporters', {
            publicPath: './reports',
            filename: 'index.html',
            pageTitle: 'Test Report'
        }]
    ]
}
