import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Language() {
  const pathname = usePathname();
  const router = useRouter();
  const [lan, setLan] = React.useState("en");

  const onChangeLan = (value: string) => {
    setLan(value);
    router.replace(pathname, pathname, { locale: value });
  };

  React.useEffect(() => {
    setLan(router.locale);
  }, [router.locale]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" style={{ boxShadow: "none" }}>
          <span className="i-mingcute-translate-line w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={lan} onValueChange={onChangeLan}>
          <DropdownMenuRadioItem value="en" style={{ boxShadow: "none" }}>
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="zh" style={{ boxShadow: "none" }}>
            简体中文
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
