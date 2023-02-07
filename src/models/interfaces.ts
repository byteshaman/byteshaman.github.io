import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ProjectInfo {
  name: string;
  description: string;
  url: string;
}

export interface FooterTechnology {
  icon: any;
  name: string;
  url: string;
}

export interface ListItem {
  description: string;
  value: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}