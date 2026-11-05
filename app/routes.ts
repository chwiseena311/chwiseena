import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("components/home.tsx"),
  route("about", "components/about.tsx"),
  route("projects", "components/projects.tsx"),
  route("resume", "components/resume.tsx"),
  route("contact", "components/contact.tsx"),
] satisfies RouteConfig;
