/*global QUnit*/

sap.ui.define([
	"com/budget/mmbudgetprocess/controller/NewBudgetRequestForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NewBudgetRequestForm Controller");

	QUnit.test("I should test the NewBudgetRequestForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
