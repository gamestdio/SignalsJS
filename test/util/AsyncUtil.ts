export class AsyncUtil {
    public add(callback: Function, delay: number, doneCallback?: Function, ...args: any[]): Function {
        return (..._args: any[]) => {
            this.createTimeout(callback, delay, doneCallback, ..._args);
        };
    }

    private createTimeout(callback: Function, delay: number, doneCallback?: Function, ...args: any[]) {
        setTimeout(function() {
            if (callback) {
                callback(...args);
            }

            if (doneCallback) {
                doneCallback();
            }
        }, delay);
    }
}
