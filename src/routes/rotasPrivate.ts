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
// tipo de comercio
router.get("/tipos", TipoCtrl.getTipos);
router.post("/promo", PromoCtrl.createPromo);
router.get("/promo/:id", PromoCtrl.getPromosIdUser);

export = router;
