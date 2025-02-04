import {SOCKET, SOCKET_URL} from '@constants/enum/webSocket';
import io, {Socket} from 'socket.io-client';

class WSService {
  private socket: Socket | null = null;

  //socket Initialized
  initializeSocket = async () => {
    try {
      // If a socket already exists, disconnect it first
      if (this.socket) {
        this.socket.disconnect();
        this.socket.removeAllListeners();
      }

      this.socket = io(SOCKET_URL, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 3,
        reconnectionDelay: 3000,
      });

      console.log('initialized socket');

      //this connect
      this.socket.on(SOCKET.CONNECT, () => {
        console.log('socket Connected');
      });

      //this disconnect
      this.socket.on(SOCKET.DISCONNECT, (reason: string) => {
        console.log('Socket disconnected:', reason);
      });

      //this error
      this.socket.on(SOCKET.ERROR, (error: any) => {
        console.log(error, 'Socket Error');
      });
    } catch (err) {
      console.log('Socket is not initialized ', err);
    }
  };

  //emit function
  emit(event: string, data = {}) {
    if (this.socket) {
      this.socket?.emit(event, data);
      console.log(`Emitted event: ${event}`, data);
    } else {
      console.warn(`Cannot emit event: ${event}, socket not connected.`);
    }
  }

  //on function
  on(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
      console.log(` Listening for event: ${event}`);
    } else {
      console.warn(`Cannot listen for event: ${event}, socket not connected.`);
    }
  }

  //remove event listerner
  removeListener(event: string) {
    if (this.socket) {
      this.socket.off(event);
      console.log(` Removed listener for event: ${event}`);
    } else {
      console.warn(
        `⚠️ Cannot remove listener for event: ${event}, socket not connected.`,
      );
    }
  }
}

const socketServices = new WSService();
export default socketServices;
