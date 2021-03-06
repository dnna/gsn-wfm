Ext.apply(
  Tei.Wfm.App.prototype.helperFuncs,
  {
	scope : this.scope,

	flushDocIdList : function(){
		scope.doc_id_list = [];
		scope.action4doc_id_list = null;
	},
	
	formatSize : function(value){
		var str = '';
		if ( value ) {
			var s = ['bytes', 'Kb', 'MB', 'GB', 'TB', 'PB'];
			var e = Math.floor(Math.log(value)/Math.log(1024));
			str += (value/Math.pow(1024, Math.floor(e))).toFixed(2)+' '+s[e];
		}
		return str;
	},

	/*--- ---*/
	
	isExtractable : function(filename){
		
		var allowedEtxs = ['zip','rar'];
		var fileExt = scope.helperFuncs.getFileExtension(filename);

		if (in_array(fileExt,allowedEtxs))
			return true;

		return false;
	},
	
	isImage : function(filename){

		var allowedEtxs = ['jpg','jpeg','gif','png','bmp'];
		var fileExt = scope.helperFuncs.getFileExtension(filename);

		if (in_array(fileExt,allowedEtxs))
			return true;

		return false;
	},
	
	isPdf : function(filename){

		var allowedEtxs = ['pdf'];
		var fileExt = scope.helperFuncs.getFileExtension(filename);

		if (in_array(fileExt,allowedEtxs))
			return true;

		return false;
	},
	
	isMsWord : function(filename){

		var allowedEtxs = ['doc','docx'];
		var fileExt = scope.helperFuncs.getFileExtension(filename);

		if (in_array(fileExt,allowedEtxs))
			return true;

		return false;
	},
	
	isMsExcel : function(filename){

		var allowedEtxs = ['xls','xlsx'];
		var fileExt = scope.helperFuncs.getFileExtension(filename);

		if (in_array(fileExt,allowedEtxs))
			return true;

		return false;
	},
	
	getFileExtension : function(fname) {

		var dot = fname.lastIndexOf("."); 

		if( dot == -1 ) return "";

		var extension = fname.substr(dot+1,fname.length);

		return extension.toLowerCase(); 
	},	
	
	/*--- ---*/
	
	ajaxStart : function(){
		//nothing
	},
	
	ajaxSuccess : function(response){
		//nothing
	},

	ajaxFail : function(){
		//nothing
	},

	endAjaxQueue : function(){
		//nothing
	},

	hasBanner: function(){
		if (window.location.search.indexOf('nobanner') > -1) {
			return false;
		} else {
			return true;
		}
	}	
	
  }
);
