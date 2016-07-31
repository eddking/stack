

export class Client {
    connection: WebSocket;
    established: boolean;
    sendBuffer: any[];
    listeners: {(any): void}[];

    constructor(url: string, store: Redux.Store<any>) {
        this.sendBuffer = [];
        this.listeners = [];
        this.connection = new WebSocket('ws://localhost:9090');   
        this.connection.onopen = () => {
            this.established = true;
        }
        this.connection.onmessage = (event) => {
            var msg = JSON.parse(event.data);
            switch(msg.type) {
              case "action":
                store.dispatch(Object.assign({server: true}, msg.payload))
                break;
            }
        }
    }

    send(msg: any) {
        if (this.established) {
            if (this.sendBuffer) {
                this.sendBuffer.forEach((item) => {
                    this.doSend(item)
                })
                this.sendBuffer = null;
            }
            this.doSend(msg)
        } else {
            this.sendBuffer.push(msg)
        }
    }
    onMessage(func: {(any): void}) {
        this.listeners.push(func);
    }

    private doSend(msg: any) {
        this.connection.send(JSON.stringify(msg))
    }
}

