import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  try {
    createUserController.handle(request, response);
  } catch (err) {
    response.status(400).json({ error: err });
  }
});

usersRoutes.patch("/:user_id/admin", (request, response) => {
  try {
    turnUserAdminController.handle(request, response);
  } catch (err) {
    response.status(404).json({ error: err });
  }
});

usersRoutes.get("/:user_id", (request, response) => {
  try {
    showUserProfileController.handle(request, response);
  } catch (err) {
    response.status(404).json({ error: err });
  }
});

usersRoutes.get("/", (request, response) => {
  try {
    listAllUsersController.handle(request, response);
  } catch (err) {
    response.status(400).json({ error: err });
  }
});

export { usersRoutes };
