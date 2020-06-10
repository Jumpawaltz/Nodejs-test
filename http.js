if (path === '/') {
    response.statusCode = 200;
    response.setHeader('content-Type', 'text/html;charset=utf-8')
    response.write('  ')
    response.end()
} else if (path === '/style.css') {
    response.statusCode = 200
    response.setHeader('content-Type', 'text/html', 'charset=utf-8')
    response.write('')
    response.end()
}else {
    response.statusCode = '404'
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.end()
}
