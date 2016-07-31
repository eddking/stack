import logging
import json

from tornado.web import Application
from tornado.websocket import WebSocketHandler
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

class AppSocket(WebSocketHandler):

    def open(self):
        self.set_nodelay(True)
        self.write_message({
            "type": "action",
            "payload": {
                "type": "INCREMENT"
            }
        })
        self.write_message({
            "type": "action",
            "payload": {
                "type": "INCREMENT"
            }
        })
        self.write_message({
            "type": "action",
            "payload": {
                "type": "INCREMENT"
            }
        })

    def on_message(self, message):
        try:
            pkg = json.loads(message)
        except:
            logging.error('bad message: ' + message)
            return
        print json.dumps(pkg)

    def check_origin(self, origin):
        return True

app = Application([
    (r"/", AppSocket)
])

def main():
    server = HTTPServer(app)
    server.listen(9090)
    print "starting on port 9090"
    IOLoop.current().start()

if __name__ == "__main__":
    main()

