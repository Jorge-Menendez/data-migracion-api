
export class Util {

    static convertirFecha(fecha: string): Date {
        const [day, month, year] = fecha.split("-");
        return new Date(Number(year), Number(month) - 1, Number(day));
    }

    static formatearMonto(monto: string): number {
        return parseFloat(monto.replace(".", "").replace(",", "."));
    }

    static validarId(id:any):number | null{
        return (id) ? ((typeof id === "string") ? null : id) : null;
    }

    static calcularDescuento(precio:number, porcentaje:number):number{
        return precio - ((precio * porcentaje)/100);
    }
}
