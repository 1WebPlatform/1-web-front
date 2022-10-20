import { defineStore } from 'pinia'
import { ObjectAny } from '../model/objectAny';
export const useTableStore = defineStore('table', {
    actions: {
        generatorTecTable(id: string) {
            this.components[id]._tec = {};
            this.components[id]._tec.focus = {};
            this.components[id]._tec.focus.index = {};
        },

        saveFocus(id: string, rows: ObjectAny, indexRow: number, indexCol: number) {
            this.resetTecRows(id);
            this.components[id]._tec.focus.rows = rows;
            this.components[id]._tec.focus.index.indexRow = indexRow;
            this.components[id]._tec.focus.index.indexCol = indexCol;
        },
        resetTecRows(id: string) {
            const rowActive = this.components[id]._tec.focus.rows;
            if (rowActive._tec.activeFocus) {
                rowActive._tec.activeFocus = false;
            }
        },
        saveTecRows(id: string, row: ObjectAny) {
            if (!row._tec) {
                row._tec = {};
            }
            row._tec.activeFocus = true;
            this.components[id]._tec.focus.rows = row;
        }
    },
    getters: {
        getTableFocusData() {
            return (id: string) => this.components[id]._tec.focus.rows;
        },
        getTableFocusIndexs() {
            return (id: string) => this.components[id]._tec.focus.index;
        },
    }
});