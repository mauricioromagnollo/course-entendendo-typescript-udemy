namespace Geometria {
  export namespace Area {
    export const PI = 3.14
    
    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }
  }
}
