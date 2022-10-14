const userinput = document.getElementById("userinput");
const cpoutput = document.getElementById("cpoutput");
const fromUnits = document.getElementById("from-units");
const toUnits = document.getElementById("to-units");
const userinputForm = document.getElementById("userinput-form");
const cpoutputForm = document.getElementById("cpoutput-form");
const selects = document.getElementsByTagName("select");
const flex_item_1 = document.getElementById("flex-item-1");
const flex_item_2 = document.getElementById("flex-item-2");
const flex_item_3 = document.getElementById("flex-item-3");
const flex_item_4 = document.getElementById("flex-item-4");

window.onload = function () {
  fromUnits.value = "f_px";
  toUnits.value = "t_rem";
};

function refresh() {
  document.getElementById('reset-btn').click();
  if (userinput.value == "") {
    cpoutput.value = "";
  }
}

if (userinput.value == "") {
  cpoutput.value = "";
}

function convert() {
  // to rem/from rem
  convert_px_rem();
  convert_pt_rem();
  convert_cm_rem();
  convert_mm_rem();
  convert_in_rem();
  convert_rem_rem();

  // to px/from px
  convert_pt_px();
  convert_cm_px();
  convert_mm_px();
  convert_in_px();
  convert_px_px();

  // to pt/from pt
  convert_cm_pt();
  convert_mm_pt();
  convert_in_pt();
  convert_pt_pt();

  // to cm/from cm
  convert_mm_cm();
  convert_in_cm();
  convert_cm_cm();

  // to mm/from mm
  convert_in_mm();
  convert_mm_mm();

  // to in/from in
  convert_in_in();

  /* to vh/from vh
  convert_px_vh()*/
}

// to rem/from rem

function convert_rem_rem() {
  if (fromUnits.value === "f_rem" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

function convert_px_rem() {
  if (fromUnits.value === "f_px" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value / 16;
  }
  if (fromUnits.value === "f_rem" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 16;
  }
}

function convert_pt_rem() {
  if (fromUnits.value === "f_pt" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value * 0.083333396325467;
  }
  if (fromUnits.value === "f_rem" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value / 0.083333396325467;
  }
}

function convert_cm_rem() {
  if (fromUnits.value === "f_cm" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value * 2.3622050220101;
  }
  if (fromUnits.value === "f_rem" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value / 2.3622050220101;
  }
}

function convert_mm_rem() {
  if (fromUnits.value === "f_mm" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value * 0.23622050220101;
  }
  if (fromUnits.value === "f_rem" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value / 0.23622050220101;
  }
}

function convert_in_rem() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_rem") {
    cpoutput.value = userinput.value * 6.0000007559056;
  }
  if (fromUnits.value === "f_rem" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value / 6.0000007559056;
  }
}

// to px/from px

function convert_px_px() {
  if (fromUnits.value === "f_px" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

function convert_pt_px() {
  if (fromUnits.value === "f_pt" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 1.3333343412075;
  }
  if (fromUnits.value === "f_px" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value / 1.3333343412075;
  }
}

function convert_cm_px() {
  if (fromUnits.value === "f_cm" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 37.795280352161;
  }
  if (fromUnits.value === "f_px" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value / 37.795280352161;
  }
}

function convert_mm_px() {
  if (fromUnits.value === "f_mm" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 3.7795280352161;
  }
  if (fromUnits.value === "f_px" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value / 3.7795280352161;
  }
}

function convert_in_px() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_px") {
    cpoutput.value = userinput.value * 96.00001209449;
  }
  if (fromUnits.value === "f_px" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value / 96.00001209449;
  }
}

// to pt/from pt

function convert_cm_pt() {
  if (fromUnits.value === "f_cm" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value * 28.346438836889;
  }
  if (fromUnits.value === "f_pt" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value / 28.346438836889;
  }
}

function convert_mm_pt() {
  if (fromUnits.value === "f_mm" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value * 2.8346438836889;
  }
  if (fromUnits.value === "f_pt" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value / 2.8346438836889;
  }
}

function convert_in_pt() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value * 71.999954645698;
  }
  if (fromUnits.value === "f_pt" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value / 71.999954645698;
  }
}

function convert_pt_pt() {
  if (fromUnits.value === "f_pt" && toUnits.value === "t_pt") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

// to cm/from cm

function convert_mm_cm() {
  if (fromUnits.value === "f_mm" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value * 0.1;
  }
  if (fromUnits.value === "f_cm" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value / 0.1;
  }
}

function convert_in_cm() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value * 2.54;
  }
  if (fromUnits.value === "f_cm" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value / 2.54;
  }
}

function convert_cm_cm() {
  if (fromUnits.value === "f_cm" && toUnits.value === "t_cm") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

// from mm/to mm

function convert_in_mm() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value * 25.4;
  }
  if (fromUnits.value === "f_mm" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value / 25.4;
  }
}

function convert_mm_mm() {
  if (fromUnits.value === "f_mm" && toUnits.value === "t_mm") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

// from in/to in

function convert_in_in() {
  if (fromUnits.value === "f_in" && toUnits.value === "t_in") {
    cpoutput.value = userinput.value * 1 + " 😒";
  }
}

/* from vh/to vh
const appendedInput = document.getElementById("viewport-height");

function convert_px_vh() {
  if (fromUnits.value === "f_px" && toUnits === "t_vh") {

      cpoutput.value = 100 * (userinput.value / appendedInput.value);

  }
}*/
