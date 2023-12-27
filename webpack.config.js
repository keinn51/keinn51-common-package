import path from "path";

const config = {
  name: "test",
  resolve: {
    // 바벨이 처리할 확장자 목록
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      //파일 이름 맞춰서 지정해야 한다!
      "@hooks": path.resolve(__dirname, "hooks"), // .../.. 이런거 없애준다.
      "@components": path.resolve(__dirname, "components"),
      "@styles": path.resolve(__dirname, "styles"),
      "@resources": path.resolve(__dirname, "resources"),
    },
  },
};

export default config;
