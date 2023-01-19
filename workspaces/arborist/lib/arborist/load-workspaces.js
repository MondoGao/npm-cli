const mapWorkspaces = require('@npmcli/map-workspaces')

// shared ref used by other mixins/Arborist
const _loadWorkspaces = Symbol.for('loadWorkspaces')

module.exports = cls => class MapWorkspaces extends cls {
  // X3.2.1
  // X3.6.7.1
  async [_loadWorkspaces] (node) {
    //
    const workspaces = await mapWorkspaces({
      cwd: node.path,
      pkg: node.package,
    })

    if (node && workspaces.size) {
      node.workspaces = workspaces
    }

    return node
  }
}
