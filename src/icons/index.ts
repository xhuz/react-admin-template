const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);

export const requireIcon = () => {
  requireAll(req);
};
