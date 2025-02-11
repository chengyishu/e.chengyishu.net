$(function() {

	var gua=getUrlParam("gua");
	if (!gua) {
		location.href="/";
	}
	$.ajax({
		type: "GET",
		url: "/data/"+gua+".json",
		data: {},
		dataType: "JSON",
		success: function(result) {
			// 替换内容
			$("#emoji-name").html(result.emoji+" "+result.name);			
			$("#gua-ci").html(result.classical.gua.ci);
			$("#gua-ci-m").html(result.modern.gua.ci);
			$("#gua-xiang").html(result.classical.gua.xiang);
			$("#gua-xiang-m").html(result.modern.gua.xiang);
			$("#gua-tuan").html(result.classical.gua.tuan);
			$("#gua-tuan-m").html(result.modern.gua.tuan);
			$("#chu-yao").html(result.classical.yao.chu.ci);
			$("#chu-yao-m").html(result.modern.yao.chu.ci);
			$("#chu-yao-xiang").html(result.classical.yao.chu.xiang);
			$("#chu-yao-xiang-m").html(result.modern.yao.chu.xiang);
			$("#er-yao").html(result.classical.yao.er.ci);
			$("#er-yao-m").html(result.modern.yao.er.ci);
			$("#er-yao-xiang").html(result.classical.yao.er.xiang);
			$("#er-yao-xiang-m").html(result.modern.yao.er.xiang);
			$("#san-yao").html(result.classical.yao.san.ci);
			$("#san-yao-m").html(result.modern.yao.san.ci);
			$("#san-yao-xiang").html(result.classical.yao.san.xiang);
			$("#san-yao-xiang-m").html(result.modern.yao.san.xiang);
			$("#si-yao").html(result.classical.yao.si.ci);
			$("#si-yao-m").html(result.modern.yao.si.ci);
			$("#si-yao-xiang").html(result.classical.yao.si.xiang);
			$("#si-yao-xiang-m").html(result.modern.yao.si.xiang);
			$("#wu-yao").html(result.classical.yao.wu.ci);
			$("#wu-yao-m").html(result.modern.yao.wu.ci);
			$("#wu-yao-xiang").html(result.classical.yao.wu.xiang);
			$("#wu-yao-xiang-m").html(result.modern.yao.wu.xiang);
			$("#shang-yao").html(result.classical.yao.shang.ci);
			$("#shang-yao-m").html(result.modern.yao.shang.ci);
			$("#shang-yao-xiang").html(result.classical.yao.shang.xiang);
			$("#shang-yao-xiang-m").html(result.modern.yao.shang.xiang);
			$("#yong-yao").html(result.classical.yao.yong.ci);
			$("#yong-yao-m").html(result.modern.yao.yong.ci);
			$("#yong-yao-xiang").html(result.classical.yao.yong.xiang);
			$("#yong-yao-xiang-m").html(result.modern.yao.yong.xiang);
			// 显示内容
			$('title').html(result.name+"卦");
			if (gua=="乾" || gua=="坤") {
				$('yong').show();
			}
			$('body').show();
		}
	});
	$.ajax({
		type: "GET",
		url: "/data/js/guoyi365.json",
		data: {},
		dataType: "JSON",
		success: function(result) {
			// 替换内容
			$("#hy").attr('href',result[gua]['婚姻']);
			$("#cy").attr('href',result[gua]['财运']);
			$("#ys").attr('href',result[gua]['运势']);
		}
	});
});

function getUrlParam(name) {
	let url = new URL(location.href);
	return url.searchParams.get(name);
}
