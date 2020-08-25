import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupLifelineValidation } from 'ember-lifeline/test-support';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);
  setupLifelineValidation(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
