export const resolveScopedStyles = (scope: JSX.Element) => {
  return {
    className: scope.props.className, //就是被styled-jsx添加的独特className
    styles: scope.props.children //就是style，注入到App组件中
  };
};
