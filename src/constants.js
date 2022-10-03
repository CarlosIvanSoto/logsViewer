const constants = {
    url: 'http://www.gameue.live',
    port: '5000',
    app: {
        name: "logsviewer"
    },
    views: {
        logs: {
            title: 'Logs Viewer',
            info: 'results',
            uris: {
                all: '/log/reverse'
            }
        },
        hosts: {
            title: 'Host disponibles',
            uris:{
                all: '/host'
            }
        },
        home: {
            title: 'Bienvenido'
        }
    }
}
export default constants