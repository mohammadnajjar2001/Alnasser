function generateCode() {
    const number = document.getElementById("number").value.trim();
    const balance = document.getElementById("balance").value.trim();
    const company = document.getElementById("company").value;

    if (!number || !balance) {
        alert("يرجى إدخال الرقم والرصيد");
        return;
    }

    let code = "";
    if (company === "mtn") {
        code = `*150*11223*${number}*${balance}#`;
    } else if (company === "syriatel") {
        code = `*150*1*11223*1*${balance}*${number}*${number}#`;
    }

    document.getElementById("result").textContent = code;
    document.getElementById("resultContainer").style.display = "block";
}

function copyCode() {
    const result = document.getElementById("result").textContent;

    // fallback works everywhere
    const tempInput = document.createElement("input");
    tempInput.value = result;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    try {
        document.execCommand("copy");
        alert("تم نسخ الكود!");
    } catch (err) {
        alert("فشل النسخ. الرجاء نسخ الكود يدوياً.");
    }

    document.body.removeChild(tempInput);
}
