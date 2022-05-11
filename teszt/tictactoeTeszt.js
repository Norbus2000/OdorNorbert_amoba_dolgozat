QUnit.module('row', function () {
  QUnit.test('létezik-e a row', function (assert) {
    assert.ok(typeof row === "function", "létezik a row");
  });

  QUnit.test('row teszt 1, kiindulas', function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    assert.equal(row(), false,);

  });

  QUnit.test('row teszt 2, X nyer', function (assert) {
    tomb = ["X", "X", "X", "O", "O", "O", "-", "-", "-"];
    assert.equal(row(), true,);
  });

  QUnit.test('row teszt 3, O nyer', function (assert) {
    tomb = ["X", "X", "X", "O", "O", "O", "-", "-", "-"];
    assert.equal(row(), true,);
  });

  QUnit.test('row teszt 4, dontetlen', function (assert) {
    tomb = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
    assert.equal(row(), false,);

  });

  QUnit.test('row teszt 5, több X elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X", "X", "X", "X", "X", "X"];
    assert.equal(row(), false);
  });

  QUnit.test('row teszt 6, több O elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X", "O", "O", "O", "O", "O"];
    assert.equal(row(), true);
  });


  QUnit.test('row teszt 7, nincs elem a tömben', function (assert) {
    tomb = [];
    assert.equal(row(), false);
  });

  QUnit.test('row teszt 8, kevesebb elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X"];
    assert.equal(row(), false,);
  });

});




QUnit.module('column', function () {
  QUnit.test('létezik-e a column', function (assert) {
    assert.ok(typeof column === "function", "létezik a column");
  });

  QUnit.test('column teszt 1, kiindulas', function (assert) {
    tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    assert.equal(column(), false,);
  });

  QUnit.test('column teszt 2, X nyer', function (assert) {
    tomb = ["X", "-", "X", "O", "X", "O", "-", "O", "-"];
    assert.equal(column(), true,);
  });

  QUnit.test('column teszt 3, O nyer', function (assert) {
    tomb = ["O", "-", "O", "X", "O", "X", "-", "X", "-"];
    assert.equal(column(), true,);
  });

  QUnit.test('column teszt 4, dontetlen', function (assert) {
    tomb = ["X", "O", "X", "X", "X", "O", "O", "X", "X"];
    assert.equal(column(), false,);
  });

  QUnit.test('column teszt 5, kevesebb elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X"];
    assert.equal(column(), false,);
  });

  QUnit.test('column teszt 6, több X elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X", "X", "X", "X", "X", "X"];
    assert.equal(column(), true);
  });

  QUnit.test('column teszt 7, több O elem a tömben', function (assert) {
    tomb = ["-", "O", "O", "-", "X", "O", "O", "X", "O", "O", "O", "O", "O"];
    assert.equal(column(), true);
  });

  QUnit.test('column teszt 8, nincs elem a tömben', function (assert) {
    tomb = [];
    assert.equal(column(), false);
  });
});




QUnit.module('jobbrolBalra', function () {
  QUnit.test('létezik-e a jobbrolbalra', function (assert) {
    assert.ok(typeof jobbrolBalra === "function", "létezik a jobbrolbalra");
  });
      QUnit.test('jobbrolbalra teszt 1 kiindulas', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(jobbrolBalra(), false,);
      });

      QUnit.test('jobbrolbalra teszt 2 X nyer', function (assert) {
        tomb = ["X", "-", "-", "", "X", "-", "", "-", "X"];
        assert.equal(jobbrolBalra(), true,);
      });

      QUnit.test('jobbrolbalra teszt 3 O nyer', function (assert) {
        tomb = ["O", "-", "-", "-", "O", "-", "", "-", "O"];
        assert.equal(jobbrolBalra(), true,);
      });

      QUnit.test('jobbrolbalra teszt 4 üres a tömb', function (assert) {
        tomb = [];
        assert.equal(jobbrolBalra(), false,);
      });

    });



  QUnit.module('balrolJobra', function () {
    QUnit.test('létezik-e a balrolJobra', function (assert) {
      assert.ok(typeof balrolJobra === "function", "létezik a jobbrolbalra");
    });

    QUnit.test('balroljobbra 1, kiindulas', function (assert) {
      tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
      assert.equal(balrolJobra(), false,);
    });

    QUnit.test('balroljobbra teszt 2 O nyer', function (assert) {
      tomb = ["-", "-", "O", "-", "O", "-", "O", "-", "-"];
      assert.equal(jobbrolBalra(), false,);
    });

    QUnit.test('jobbrolbalra teszt 3 X nyer', function (assert) {
      tomb = ["-", "-", "X", "-", "X", "-", "X", "-", "-"];
      assert.equal(jobbrolBalra(), false,);
    });

    QUnit.test('jobbrolbalra teszt 4 nincs nyertes', function (assert) {
      tomb = ["X", "-", "-", "-", "-", "-", "-", "-", "O"];
      assert.equal(jobbrolBalra(), false,);
    });

  });

    QUnit.module('cross', function () {
      QUnit.test('létezik-e a cross', function (assert) {
        assert.ok(typeof cross === "function", "létezik a cross");
      });

      QUnit.test('crosss teszt 1, nem X nyer', function (assert) {
        tomb = ["O", "O", "O", "X", "X", "X", "-", "-", "-"];
        assert.equal(cross(), false,);
      });

      QUnit.test('crosss teszt 1, nem X nyer', function (assert) {
        tomb = ["O", "O", "O", "X", "X", "X", "-", "-", "-"];
        assert.equal(cross(), false,);
      });
  });

  QUnit.module('ellenorzes', function () {

    QUnit.test('létezik-e a ellenorzes', function (assert) {
      assert.ok(typeof ellenorzes === "function", "létezik a jobbrolbalra");
    });

    QUnit.test('nyertes kiindulas', function (assert) {
      assert.equal(ellenorzes(), false);
    });

    QUnit.test('van nyertes', function (assert) {
      assert.equal(ellenorzes(), true);
    });

    QUnit.test('nincs nyertes', function (assert) {
      assert.equal(ellenorzes(), false);
    });

  });






