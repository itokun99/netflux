import { withController, JsonResponseInterface, ControllerHandleType } from '@backend/utils/http';
import authUseCase from '@usecases/auth';




export const googleAuthController =  withController({
  post(req, res){
    const result = authUseCase.googleLoginAdmin(req);
    res.status(result.status).json(result);
  }
});

export const googleTokenController =  withController({
  async post(req, res){
    const result = await authUseCase.googleGetAccessToken(req);
    res.status(result.status).json(result);
  }
});