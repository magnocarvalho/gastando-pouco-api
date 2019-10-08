import { Promo, IPromo } from "../model/Promo";

class PromoCtrl {
  public static getPromos(req, res, next) {
    return Promo.find((err: any, data: any) => {
      if (err) {
        console.log(err);
        console.log(new Date().toLocaleString(), err.messagem);
        next(err);
      } else res.json(data);
    });
  }
  public static createPromo(req, res, next) {
    let obj: IPromo = req.body;
    obj["user"] = res.locals.uid;
    console.log(obj);
    return Promo.create(obj, (err: any, data: any) => {
      if (err) {
        console.log(err);
        console.log(new Date().toLocaleString(), err.messagem);
        next(err);
      } else res.json(data);
    });
  }
}
export default PromoCtrl;
