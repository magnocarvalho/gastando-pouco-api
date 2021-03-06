import * as express from "express";
import UserCtrl from "../controllers/UserCtrl";
import firewallbase from "../middleware/firewallbase";
import TipoCtrl from "../controllers/TipoCtrl";
import PromoCtrl from "../controllers/PromoCtrl";
const router = express.Router();



router.use("/", firewallbase);
// rotas de autenticação do usuario
router.post("/user", UserCtrl.createUser);
router.get("/user", UserCtrl.findUserUID);
router.put("/user", UserCtrl.updateUser)
// tipo de comercio
router.get("/tipos", TipoCtrl.getTipos);
//promoçoes
router.post("/promo", PromoCtrl.createPromo);
router.get("/promo/:empresa?", PromoCtrl.getPromosIdUser);

export = router;
