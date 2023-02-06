import { Request, Response } from 'express';
import StatesModel from '../models/StateModel';

function filterState(state: StateName): StateData | undefined {
  // Make sure the state is in our dataset
  if (!(state in StatesModel.stateCapitals)) {
    return undefined; // If it isn't then terminate the function
  }

  // Otherwise assume everything is ok
  const stateCapital = StatesModel.stateCapitals[state] as string;
  const stateData = {
    state,
    capital: stateCapital,
  };
  return stateData;
}

function getCapital(req: Request, res: Response): void {
  if (req.query.state) {
    const { state } = req.query as CapitalRequestQuery;
    if (state in stateCapital) {
      const stateCapital = stateCapital[state];
      const stateData = {
        state,
        capital: stateCapital,
      };
      console.log(`User requested data for ${state}`);
      res.json(stateData);
    } else {
      console.log(`User requested data for ${state} but it is not in our dataset`);
      res.sendStatus(400);
    }
  } else {
    console.log('User is requesting all state data');
    res.json(stateCapital);
  }
}

function addCapital(req: Request, res: Response): void {
  res.sendStatus(501); // 501 Not Implemented
}

export default { getCapital, addCapital };
