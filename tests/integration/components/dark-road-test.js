import { module, test } from 'qunit';
import { setupLifelineValidation } from 'ember-lifeline/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dark-road', function(hooks) {
  setupLifelineValidation(hooks);
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<DarkRoad />`);

    assert.equal(this.element.textContent.trim(), 'Hi');
  });
});
