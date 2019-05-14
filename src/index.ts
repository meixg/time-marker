import {optionsType, dataType, callbackType} from './types';

export class TimeMarker {
    private data: dataType;
    private options: optionsType;
    private firstKey: string;
    private callback: callbackType;

    constructor(sequence: string[], callback: callbackType, options?: optionsType) {
        if (!Array.isArray(sequence) || sequence.length < 1) {
            throw Error('sequence must be an array');
        }

        this.firstKey = sequence[0];
        this.data = new Map(sequence.map(item => ([item, undefined] as [string, number])));
        this.options = options;
        this.callback = callback;
    }

    mark(item: string) {
        if (!this.data.has(item)) {
            return;
        }

        this.data.set(item, Date.now());

        if (this.isAllMarked()) {
            this.finish();
        }
    }

    isAllMarked() {
        for (let v of this.data.values()) {
            if (v === undefined) {
                return false;
            }
        }

        return true;
    }

    private finish() {
        const res: {[name: string]: number} = {};
        const firstValue = this.data.get(this.firstKey);

        for (let [key, value] of this.data) {
            if (key !== this.firstKey) {
                res[key] = value - firstValue;
            }
        }
        
        // 清除所有值
        this.clear();

        this.callback(res);
    }

    clear() {
        this.data.forEach((val, key, map) => {
            map.set(key, undefined);
        });
    }
}