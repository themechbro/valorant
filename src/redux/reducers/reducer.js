const initialState = {
  agentCardData: [],
  isLoggedIn: false,
  viewCard: {},
  viewCardAbility: {},
};

export default function Reducers(state = initialState, action) {
  switch (action.type) {
    case "VIEW_AGENT":
      return { ...state, viewCard: action.payload };
    case "VIEW_AGENTS_ABILITY":
      return { ...state, viewCardAbility: action.payload };
    default:
      return state;
  }
}
