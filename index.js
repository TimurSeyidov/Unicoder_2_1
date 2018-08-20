var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    circle = new Path2D(),
    line = new Path2D(),
    D = 400,
    R = D / 2;

context.lineWidth = 1;
context.strokeStyle = "#333";

circle.arc(R, R, R, 0, 2 * Math.PI);
context.stroke(circle);

context.lineWidth = 2;
for (var d = 0; d < 60; ++d) {
    var angle = (d / 60) * (2 * Math.PI),
        pX = Math.cos(angle) * R,
        pY = -Math.sin(angle) * R,
        qX = 0.95 * pX,
        qY = 0.95 * pY;
    pX += R;
    pY += R;
    qX += R;
    qY += R;
    line.moveTo(pX, pY);
    line.lineTo(qX, qY);
}
context.stroke(line);
drawWatch(context, D);

function drawWatch(context) {
    var R = D / 2,
        circle = new Path2D(),
        hLine = new Path2D(),
        mLine = new Path2D(),
        sLine = new Path2D();

    context.fillStyle = "#FFF";
    circle.arc(R, R, R * 0.95, 0, 2 * Math.PI);
    context.fill(circle);

    var date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    //Рисуем стрелки
    var secondAngle = (Math.PI / 2) - ((s / 60) * (2 * Math.PI)),
        minuteAngle = (Math.PI / 2) - ((m / 60) * (2 * Math.PI)),
        hourAngle = (Math.PI / 2) - ((h / 60) * (2 * Math.PI));
    //час
    var hsX = Math.cos(hourAngle) * R,
        hsY = -Math.sin(hourAngle) * R,
        heX = 0.5 * hsX + R,
        heY = 0.5 * hsY + R;
    context.lineWidth = 3;
    context.strokeStyle = "red";
    hLine.moveTo(R, R);
    hLine.lineTo(heX, heY);
    context.stroke(hLine);
    //мин
    var msX = Math.cos(minuteAngle) * R,
        msY = -Math.sin(minuteAngle) * R,
        meX = 0.7 * msX + R,
        meY = 0.7 * msY + R;
    context.lineWidth = 2;
    context.strokeStyle = "#333";
    mLine.moveTo(R, R);
    mLine.lineTo(meX, meY);
    context.stroke(mLine);

    //сек
    var ssX = Math.cos(secondAngle) * R,
        ssY = -Math.sin(secondAngle) * R,
        seX = 0.9 * ssX + R,
        seY = 0.9 * ssY + R;
    context.lineWidth = 1;
    context.strokeStyle = "#333";
    sLine.moveTo(R, R);
    sLine.lineTo(seX, seY);
    context.stroke(sLine);

    setTimeout(function() {
        drawWatch(context, D);
    }, 1000);

}