"use client";
import { useHomeStore } from "@/store/global";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

export default function Home() {
  const { showHome, hideHome } = useHomeStore();
  return (
    // TODO: 测试用背景颜色
    <>
      <div onClick={() => showHome()}>
        <Icon path={mdiMenu} size={1.2} />
      </div>

      <div>美好的一天</div>
    </>
  );
}
