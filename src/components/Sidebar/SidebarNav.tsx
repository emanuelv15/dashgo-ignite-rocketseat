import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>

        <NavLink icon={RiContactsLine} href="/users">
          Usuarios
        </NavLink>
      </NavSection>

      <NavSection title="Automacao">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formularios
        </NavLink>

        <NavLink icon={RiGitMergeLine} href="/automation">
          Automacao
        </NavLink>
      </NavSection>
    </Stack>
  );
}
