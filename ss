    [HttpDelete]
    [Authorize]
    [PolicyValidation(PolicyStatus = PolicyStatus.Internally)]
    public async Task<ActionResult> DeleteTemplates([Guid(ErrorMessage = ValidationMessages.ValidDocumentId)][Required(ErrorMessage = ValidationMessages.Required)]string[] templateId)
    {
     try
      {
        if (templateId == null || templateId.Contains(string.Empty) || templateId?.Length == 0)
        {
          return this.BadRequest("Failure");
        }

        var tuple = await PermissionAuthorizationHandler.GetResourceOwnerAllowedGroups(this.userDataService, this.HttpContext, Permissions.TemplateResources, this.cacheService, this.teamManagement, this.apiRequestService).ConfigureAwait(false);

        Dictionary<string, Task<bool?>> deleteTasks = new Dictionary<string, Task<bool?>>();
        var permissionList = await new AccessRightsReader(this.HttpContext, null, this.apiRequestService).GetPermissionsListAsync(this.userDataService, this.cacheService).ConfigureAwait(false);

        var groupData = await this.teamManagement.GetTeamListAsync(this.userDataService).ConfigureAwait(false);

        this.HttpContext.Items.TryAdd(DocumentDetailsReader.TeamListCache, groupData);

        foreach (var id in templateId)
        {
          deleteTasks.Add(id, this.templateService.DeleteTemplateItem(id, this.User, this.authorizationService, this.documentService, this.userDataService, permissionList, tuple.Item1));
        }

        await Task.WhenAll(deleteTasks.Select(v => v.Value)).ConfigureAwait(false);

        string[] successId = deleteTasks.Where(x => x.Value.Result == true).Select(x => x.Key).ToArray();

        if (deleteTasks.Any(x => x.Value.Result == null))
        {
          return this.Forbid();
        }

        //return deleteTasks.All(x => x.Value.Result == true) ? this.Ok("Success") : (IActionResult)this.BadRequest(ExceptionMessages.DeleteTemplateDrafts);
      return deleteTasks.All(x => x.Value.Result == true) ? Ok("Success"): BadRequest(ExceptionMessages.DeleteTemplateDrafts);

      }
      catch (CosmosException ex) when (ex.StatusCode.ToString().ToUpperInvariant() == this.documentService.DocumentClientNotFoundException)
      {
        return this.BadRequest("Failure");
      }
    }
 deleteYesBtn() {
      this.$nuxt.$spinner.show(true);
      const gridObj = this.$refs.grid1.ej2Instances;
      const selectedRecords: any[] = gridObj.getSelectedRecords();
    
      if (!selectedRecords.length) {
        this.$nuxt.$spinner.show(false);
        return;
      }
    
      const documentName = selectedRecords[0].messageTitle;
      const successContent = this.$nuxt.$t('toast.deleteTempPermanentSuccessToastTittle', { documentName });
      const failureContent = this.$nuxt.$t('toast.deleteTempPermanentFailureToastTittle', { documentName });
    
      const ids: string[] = selectedRecords.map(item => item.documentId);
      this.onNewNotificationReceived();
      this.$data.deleteDialogVisible = false;
    
      // Handle draft template deletion separately
      if (isStatusMatch(this.$nuxt.$route, ['drafts'])) {
        this.$api.template
          .deleteDraftTemplate(ids)
          .then(() => {
            this.selectedDocumentsCount = 0;
            this.checkState = false;
            this.hideSelectedItems(selectedRecords);
            this.scheduleGridRefresh();
            this.$nuxt.$toastService.show(successContent, 'bs_toast_success', 'bs_delete_toast');
          })
          .catch(() => {
            this.$nuxt.$toastService.show(failureContent, 'bs_toast_failure', 'bs_delete_toast');
          })
          .finally(() => {
            this.$nuxt.$spinner.show(false);
          });
      } else {
        console.log("merge delete")
        //  MODIFIED ELSE PART - Send entire array instead of looping
        this.$api.template.mergeDeleteTemplate(ids)
          .then(() => {
            this.selectedDocumentsCount = 0;
            this.checkState = false;
            this.hideSelectedItems(selectedRecords);
            this.scheduleGridRefresh();
            this.$nuxt.$toastService.show(successContent, 'bs_toast_success', 'bs_delete_toast');
          })
          .catch(() => {
            this.$nuxt.$toastService.show(failureContent, 'bs_toast_failure', 'bs_delete_toast');
          })
          .finally(() => {
            this.$nuxt.$spinner.show(false);
          });
      }
    
      this.isToolbar = false;
    }deletemergeTemplate(templateId: string[]) {
return $axios.$delete('/Template/DeleteTemplates/', {
params: { templateId },
paramsSerializer: params => paramsSerializer(params),
});
},
