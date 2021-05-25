export const routes = {
  any: "/*",
  login: "login",
  users: "/users",
  system: "/system-performance",
};

export const route_tabs = [
  {
    name: "userListSubmenu.tab",
    route: routes.users,
  },
  {
    name: "userSystemSubmenu.tab",
    route: routes.system,
  },
];
