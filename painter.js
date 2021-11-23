let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    add_tool: tool => painter.tools.push(tool),
    show_tools: () => {console.log(painter.tools)}
}

  painter.add_tool("hammer");
  painter.show_tools();
  //console.log(painter.tools);