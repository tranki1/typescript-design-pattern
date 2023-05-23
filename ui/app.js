const builderPatternData = window.builderPatternData;
const svgNamespace = "http://www.w3.org/2000/svg";

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function renderRoles(roles) {
  const container = document.querySelector("#role-list");

  if (!container) {
    return;
  }

  container.innerHTML = roles
    .map(
      (role) => `
        <div class="role-card">
          <h4>${role.name}</h4>
          <p>${role.description}</p>
        </div>
      `,
    )
    .join("");
}

function renderFlow(flowSteps) {
  const container = document.querySelector("#flow-list");

  if (!container) {
    return;
  }

  container.innerHTML = flowSteps.map((step) => `<li>${step}</li>`).join("");
}

function createSvgElement(tagName, attributes = {}) {
  const element = document.createElementNS(svgNamespace, tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, String(value));
  });

  return element;
}

function renderDiagram(diagram) {
  const canvas = document.querySelector("#pattern-diagram");

  if (!canvas || !diagram) {
    return;
  }

  setText("#diagram-title", diagram.title);
  setText("#diagram-description", diagram.description);
  canvas.setAttribute(
    "viewBox",
    `0 0 ${diagram.viewBox.width} ${diagram.viewBox.height}`,
  );
  canvas.replaceChildren();

  const nodeMap = new Map(diagram.nodes.map((node) => [node.id, node]));
  const defs = createSvgElement("defs");
  const marker = createSvgElement("marker", {
    id: "diagram-arrow",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "7",
    markerHeight: "7",
    orient: "auto-start-reverse",
  });
  const arrowPath = createSvgElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: "rgba(29, 42, 50, 0.58)",
  });

  marker.appendChild(arrowPath);
  defs.appendChild(marker);
  canvas.appendChild(defs);

  diagram.edges.forEach((edge) => {
    const fromNode = nodeMap.get(edge.from);
    const toNode = nodeMap.get(edge.to);

    if (!fromNode || !toNode) {
      return;
    }

    const fromX = fromNode.x + 90;
    const fromY = fromNode.y + 60;
    const toX = toNode.x + 90;
    const toY = toNode.y;
    const line = createSvgElement("path", {
      d: `M ${fromX} ${fromY} L ${toX} ${toY}`,
      class: "diagram-edge",
      "marker-end": "url(#diagram-arrow)",
    });
    const label = createSvgElement("text", {
      x: (fromX + toX) / 2,
      y: (fromY + toY) / 2 - 8,
      class: "diagram-edge-label",
      "text-anchor": "middle",
    });

    label.textContent = edge.label;
    canvas.appendChild(line);
    canvas.appendChild(label);
  });

  diagram.nodes.forEach((node) => {
    const group = createSvgElement("g", {
      class: `diagram-node diagram-node--${node.role}`,
      transform: `translate(${node.x}, ${node.y})`,
    });
    const rect = createSvgElement("rect", {
      width: "180",
      height: "60",
      rx: "18",
    });
    const text = createSvgElement("text", {
      x: "90",
      y: "35",
      class: "diagram-node-label",
      "text-anchor": "middle",
    });

    text.textContent = node.label;
    group.appendChild(rect);
    group.appendChild(text);
    canvas.appendChild(group);
  });
}

function renderPreview(scenario) {
  setText("#scenario-title", scenario.label);
  setText("#scenario-summary", scenario.summary);
  setText("#scenario-kind", scenario.kind);
  setText("#scenario-status", scenario.status);

  const output = document.querySelector("#scenario-output");

  if (output) {
    output.textContent = JSON.stringify(scenario.output, null, 2);
  }
}

function renderScenarioButtons(scenarios) {
  const container = document.querySelector("#scenario-list");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  scenarios.forEach((scenario, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "scenario-button";
    button.innerHTML = `
      <span class="status-pill status-pill--${scenario.status}">${scenario.status}</span>
      <strong>${scenario.label}</strong>
      <small>${scenario.summary}</small>
    `;

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".scenario-button")
        .forEach((item) => item.classList.remove("scenario-button--active"));

      button.classList.add("scenario-button--active");
      renderPreview(scenario);
    });

    if (index === 0) {
      button.classList.add("scenario-button--active");
      renderPreview(scenario);
    }

    container.appendChild(button);
  });
}

function renderBuilderPattern(data) {
  if (!data) {
    return;
  }

  setText("#pattern-name", data.name);
  setText("#pattern-summary", data.summary);
  setText("#pattern-category", `${data.category} pattern`);
  setText("#metric-builders", String(data.concreteBuilders.length));
  setText("#metric-flows", String(data.directorFlows.length));
  setText("#metric-base-builder", data.sharedBaseBuilder);
  setText(
    "#demo-source-note",
    `Rendered from ${data.scenarios.length} real director-driven demo scenarios.`,
  );

  renderRoles(data.roles);
  renderFlow(data.flowSteps);
  renderDiagram(data.diagram);
  renderScenarioButtons(data.scenarios);
}

renderBuilderPattern(builderPatternData);
